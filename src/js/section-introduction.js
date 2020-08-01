import {env} from './global-variables'
import axios from 'axios'

new Vue({

    el: '#introduction',


    data() {
        return {
            vat: "ATU33864707",
            vatData: null,
            vatError: null,
            server: env.api + "/validate/",
            apiName: env.name,
            url: this.server + this.vat
        }
    },



    methods:
        {
            getVat: function () {
                this.url = this.server + this.isin;

                console.info("Loading vat check on: " + this.url);

                // Get fund
                axios
                    .get(this.url)
                    .then(response => {
                        console.log("dadw")
                        this.vatError = false
                        this.vatData = response.data

                        document.querySelector('#demo-content').forEach(el => {
                            console.log("dadw")
                            let renderedJson = new JSONFormatter(this.vatData).render();
                            var parent = el.parentNode
                            parent.removeChild(el)
                            document.querySelector('#demo-content').appendChild(renderedJson)
                        })

                    })
                    // Free requests have expired
                    .catch(error => {
                        console.error(error)
                        //this.fundError = "Unspecified error occured."
                        if (typeof error.response === "undefined")
                            this.fundError = "Unspecified error occured."
                        else if (error && error.response.status == 404)
                            this.fundError = "Unfortunatelly the page provided could not be found. Did you try with a correct VAT?"
                        else if (error && error.response.status == 401)
                            this.fundError = "Unfortunatelly your free requests have expired."+ 
                            " Please feel free to visit again tomorrow, or subscribe to a plan."
                    })
            },
        }
})