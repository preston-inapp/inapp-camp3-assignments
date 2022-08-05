class Utils {
    static formatString(str) {
        var sentence = str.trim()
        var words = sentence.split(" ")
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ")
    }
}

class Student {

    constructor() {
        this.name = undefined
        this.cls = undefined
        this.age = undefined
        this.gender = undefined
        this.loc = undefined
    }

    getName() {
        return this.name
    }

    getClass() {
        return this.cls
    }

    getAge() {
        return this.age
    }

    getGender() {
        return this.gender
    }

    getLoc() {
        return this.loc
    }

    setName(name) {
        this.name = name
    }

    setClass(cls) {
        this.cls = cls
    }

    setAge(age) {
        this.age = age
    }

    setGender(gender) {
        this.gender = gender
    }

    setLoc(loc) {
        this.loc = loc
    }

    addDetail(attr, val) {
        if (val.length == 0) {
            console.log("Cannot insert empty value")
            return
        }
        switch (attr) {
            case "name":
                this.setName(Utils.formatString(val))
                break
            case "class":
                this.setClass(val)
                break
            case "age":
                this.setAge(val)
                break
            case "gender":
                this.setGender(val)
                break
            case "location":
                this.setLoc(val)
                break
        }
    }

    editDetail(attr, val) {
        if (val.length == 0) {
            console.log("Cannot insert empty value")
            return
        }
        switch (attr) {
            case "name":
                this.setName(Utils.formatString(val))
                break
            case "class":
                this.setClass(val)
                break
            case "age":
                this.setAge(val)
                break
            case "gender":
                this.setGender(val)
                break
            case "location":
                this.setLoc(val)
                break
        }
    }

    deleteDetail(attr) {
        switch (attr) {
            case "name":
                this.setName(undefined)
                break
            case "class":
                this.setClass(undefined)
                break
            case "age":
                this.setAge(undefined)
                break
            case "gender":
                this.setGender(undefined)
                break
            case "location":
                this.setLoc(undefined)
                break
        }
    }

    displayDetails() {
        alert(`Details\nName: ${this.getName()}\nClass : ${this.getClass()}\nAge: ${this.getAge()}\nGender: ${this.getGender()}\nLocation: ${this.getLoc()}`)
    }
}

var s = new Student()

menu: 
    while(1){
        choice = prompt("1. Add Details\n2. Edit Details\n3. Delete Details\n4. Display Details\n5. Exit")
        switch (parseInt(choice)) {
            case 1:
                attr = prompt("Enter attribute [name, class, age, gender, location]")
                val = prompt("Enter value to set")
                s.addDetail(attr, val)
                alert("details added successfully")
                break
            case 2:
                attr = prompt("Enter attribute [name, class, age, gender, location]")
                val = prompt("Enter value to set")
                s.editDetail(attr, val)
                alert("details edited successfully")
                break
            case 3:
                attr = prompt("Enter attribute [name, class, age, gender, location]")
                s.deleteDetail(attr)
                break
            case 4:
                s.displayDetails()
                break
            case 5:
                thisUndefinedFunctionCallIsDeliberateToStopJSExecution()
                break
        }
    }