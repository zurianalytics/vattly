import {env} from './global-variables'
import axios from 'axios'
import JSONFormatter from 'json-formatter-js'
import { CountUp } from 'countup.js';

new Vue({

    el: '#introduction',


    data() {
        return {
            vat: "ATU33864707",
            vatData: null,
            vatError: null,
            server: env.api + "/validate/",
            apiName: env.name,
            url: this.server + this.vat,
            speed: 90
        }
    },


    mounted: function()
    {
        this.getVat();
        setInterval(this.lastMSSpeed.bind(this), 2000);
    },

    methods:
        {
            lastMSSpeed: function()
            {

                // Get fund
                axios
                    .get(env.api + "/speed")
                    .then(response => { 
                        new CountUp('count-up', response.data, {duration: 2, startVal: this.speed}).start();
                        this.speed = response.data 
                    })
            },

            getVat: function () {
                this.url = this.server + this.vat;

                console.info("Loading vat check on: " + this.url);

                // Get fund
                axios
                    .get(this.url)
                    .then(response => {
                        this.vatError = false
                        this.vatData = response.data

                        let container = document.querySelector('#demo-content')
                        let renderedJson = new JSONFormatter(this.vatData).render()
                        // Make Boolean Values Green / Red
                        renderedJson
                            .querySelectorAll(".json-formatter-boolean")
                            .forEach(e => e.innerText == 'true' ? e.classList.add('true') : e.classList.add('false'))
                        container.removeChild(container.firstChild)
                        container.appendChild(renderedJson)
                    })
                    // Free requests have expired
                    .catch(error => {
                        console.error(error)
                        if (typeof error.response === "undefined")
                            this.vatError = "Unspecified error occured."
                        else if (error && error.response.status == 404)
                            this.vatError = "Unfortunately the page provided could not be found. Did you try with a correct VAT?"
                        else if (error && error.response.status == 401)
                            this.vatError = "Unfortunately your free requests have expired."+ 
                            " Please feel free to visit again tomorrow, or subscribe to a plan."
                    })
            },
        }
})