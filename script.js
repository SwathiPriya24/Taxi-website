class FormValidation {
    formValues = {
        name: "",
        phonenumber: "",
        email: "",
        passengers: "",
        vehicle: "",
        startDestination: "",
        EndDestination: "",
        date: "",
        time: "",
    }
    errorValues = {
        nameErr: "",
        phonenumberErr: "",
        emailErr: "",
        passengersErr: "",
        vehicleErr: "",
        startDestErr: "",
        endDestErr: "",
        dateErr: "",
        timeErr: "",

    }
    showErrorMsg(index, msg) {
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('small')[0].textContent = msg
    }
    showSuccessMsg(index) {
        const form_group = document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')

    }
    getInputs() {
        this.formValues.name = document.getElementById('name').value.trim()
        this.formValues.phonenumber = document.getElementById('phonenumber').value.trim()
        this.formValues.email = document.getElementById('email').value.trim()
        this.formValues.passengers = document.getElementById('passengers').value.trim()
        this.formValues.vehicle = document.getElementById('vehicle')
        this.formValues.start_destination = document.getElementById(' start_destination')
        this.formValues.end_destination = document.getElementById(' end_destination').value
        this.formValues.date = document.getElementById('date')
        this.formValues.time = document.getElementById('time')
        this.formValues.agree = document.getElementById('agree')

    }
    validateName() {
        if (this.formValues.name === "") {
            this.errorValues.nameErr = "User name  is required"
            this.showErrorMsg(0, this.errorValues.nameErr)
        } else if (this.formValues.name.length < 3) {
            this.errorValues.nameErr = "First name must be atleast 3 Characters"
            this.showErrorMsg(0, this.errorValues.nameErr)
        }
        else {
            this.errorValues.nameErr = ""
            this.showSuccessMsg(0)
        }
    }
    validatePhonenumber() {
        const phoneno = /^\d{10}$/
        if (this.formValues.phonenumber === "") {
            this.errorValues.phonenumberErr = "Phone number is required"
            this.showErrorMsg(2, this.errorValues.phonenumberErr)
        } else if (phoneno.test(this.formValues.phonenumber)) {
            this.errorValues.phonenumberErr = ""
            this.showSuccessMsg(2)
        } else {
            this.errorValues.phonenumberErr = "Please enter valid phone number"
            this.showErrorMsg(2, this.errorValues.phonenumberErr)
        }
    }
    validateEmail() {
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if (this.formValues.email === "") {
            this.errorValues.emailErr = "Email  is required"
            this.showErrorMsg(3, this.errorValues.emailErr)
        } else if (!(regExp.test(this.formValues.email))) {
            this.errorValues.emailErr = "Please enter valid email"
            this.showErrorMsg(3, this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(3)
        }
    }

    // validatePassenger() {
    //     const passwordStrength = /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/

    //     if (this.formValues.password === "") {
    //         this.errorValues.passwordErr = "Password is required"
    //         this.showErrorMsg(4, this.errorValues.passwordErr)
    //     } else if (!(passwordStrength.test(this.formValues.password))) {
    //         this.errorValues.passwordErr = " Password must be min 8 characters,1 lowercase,1 uppercase,1 numeric,1 special character"
    //         this.showErrorMsg(4, this.errorValues.passwordErr)
    //     }
    //     else if (this.formValues.password.length > 10) {
    //         this.errorValues.passwordErr = "Password should not exceeds 10 Characters"
    //         this.showErrorMsg(4, this.errorValues.passwordErr)
    //     } else {
    //         this.errorValues.passwordErr = ""
    //         this.showSuccessMsg(4)
    //     }
    // }
    // validateStart_destination() {
    //     if (this.formValues.start_destination === "") {
    //         this.errorValues.start_destinationErr = "Destination is required"
    //         this.showErrorMsg(0, this.errorValues.start_destinationErr)
    //     } else if (this.formValues.start_destination.length < 20) {
    //         this.errorValues.start_destinationErr = "Should be a city"
    //         this.showErrorMsg(0, this.errorValues.start_destinationErr)
    //     }
    //     else {
    //         this.errorValues.start_destinationErr = ""
    //         this.showSuccessMsg(0)
    //     }
    // }
    // validateEnd_destination() {
    //     if (this.formValues.end_destination_destination === "") {
    //         this.errorValues.end = "Destination is required"
    //         this.showErrorMsg(0, this.errorValues.end_destinationErr)
    //     } else if (this.formValues.end_destination.length < 20) {
    //         this.errorValues.end_destinationErr = "Should be a city"
    //         this.showErrorMsg(0, this.errorValues.end_destinationErr)
    //     }
    //     else {
    //         this.errorValues.end_destinationErr = ""
    //         this.showSuccessMsg(0)
    //     }
    // }

    validateStartDestination() {
        const { startDestination } = this.formValues;

        // Check if either field is empty
        if (startDestination  === "") {
            this.errorValues.startDestErr = "Both start and destination are required";
            this.showErrorMsg(4, this.errorValues.startDestErr);
        }
        // Check if start and destination are the same
        else if (start === destination) {
            this.errorValues.startDestErr = "Start and destination cannot be the same";
            this.showErrorMsg(4, this.errorValues.startDestErr);
        }
        else {
            this.errorValues.startDestErr = "";
            this.showSuccessMsg(4);
        }
    }

    validateEndDestination() {
        const { endDestination } = this.formValues;

        // Check if the end destination field is empty
        if (endDestination === "") {
            this.errorValues.endDestErr = "End destination is required";
            this.showErrorMsg(5, this.errorValues.endDestErr);
        }
       
        else {
            this.errorValues.endDestErr = "";
            this.showSuccessMsg(5);
        }
    }
 
    validateCheckbox() {
        if (!this.formValues.agree.checked) {
            this.errorValues.agreeErr = "Please select the check box"
            this.showErrorMsg(6, this.errorValues.agreeErr)
            // alert('please select the check box')
        }
        else {
            this.errorValues.agreeErr = ""
            this.showSuccessMsg(6)
        }
    }

    // alertMessage() {
    //     const { firstnameErr, emailErr, phonenumberErr, passwordErr, genderErr, cityErr, agreeErr } = this.errorValues
    //     if (firstnameErr === "" && emailErr === "" && phonenumberErr === "" && passwordErr === "" && genderErr === "" && cityErr === "" && agreeErr === "") {
    //         swal("Registration Successful", "ThankYou , " + this.formValues.firstname, "success").then(() => {
    //             console.log(this.formValues)
    //             this.removeInputs()
    //         })
    //     }
    // }

    removeInputs() {
        const form_groups = document.getElementsByClassName('form-group')
        Array.from(form_groups).forEach(element => {
            element.getElementsByTagName('input')[0].value = ""
            element.getElementsByTagName('small')[0].textContent = ""
            element.classList.remove('success')
        })
    }

}


const ValidateUserInputs = new FormValidation()
document.getElementsByClassName('form')[0].addEventListener('submit', event => {
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateName()
    ValidateUserInputs.validatePhonenumber()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validateStartDestination()
    ValidateUserInputs.validateEndDestination()
    ValidateUserInputs.validateCheckbox()
    ValidateUserInputs.alertMessage()
})
