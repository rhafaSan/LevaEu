{/* <script>
            var app = new Vue({
                el: "#app",
                data: {
                    url: "http://localhost:8080/rest_persistence/api/users",
                    username: null,
                    password: null,
                    name: null
                },
                methods: {
                    submit() {
                        let formData = new FormData();
                        formData.append('name', this.name);
                        formData.append('username', this.username);
                        formData.append('password', this.password);
                        axios.post(this.url,
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }
                        ).then(function (r) {
                            console.log(r.data);
                            window.location.replace("pag.html");
                        }).catch(function (error) {
                            console.log(erro);
                        });
                    },
                    handleFileUpload() {
                        this.file = this.$refs.file.files[0];                        
                    }
                }
            });
        </script> */}

        &emsp;&emsp;&nbsp;

        v-model="username"
v-model="password"
v-model="name"