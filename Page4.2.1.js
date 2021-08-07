class Page4_2_1
{
    constructor()
    {
        this.fullName = createElement('h2');
        this.mobileNo = createElement('h2');
        this.emailId = createElement('h2');
        this.age = createElement('h2');
        this.gender = createElement('h2');
        this.qualification = createElement('h2');
        this.occupation = createElement('h2');

        this.fn_input = createInput("");
        this.mn_input = createInput("");
        this.ei_input = createInput("");
        this.ag_input = createInput("");
        this.gd_input = createInput("MALE/FEMALE");
        this.qf_input = createInput("");
        this.op_input = createInput("");

        this.submit = createButton('SUBMIT');
    }

    hide()
    {
        this.fullName.hide();
        this.mobileNo.hide();
        this.emailId.hide();
        this.age.hide();
        this.gender.hide();
        this.qualification.hide();
        this.occupation.hide();

        this.fn_input.hide();
        this.mn_input.hide();
        this.ei_input.hide();
        this.ag_input.hide();
        this.gd_input.hide();
        this.qf_input.hide();
        this.op_input.hide();

        this.submit.hide();
    }

    display()
    {
        this.fullName.html('FULL NAME');
        this.fullName.position(windowWidth/3, windowHeight/3 - 210);

        this.mobileNo.html('MOBILE NO.*');
        this.mobileNo.position(windowWidth/3, windowHeight/3 - 140);

        this.emailId.html('EMAIL ID*');
        this.emailId.position(windowWidth/3, windowHeight/3 - 70);

        this.age.html('AGE*');
        this.age.position(windowWidth/3, windowHeight/3);

        this.gender.html('GENDER*');
        this.gender.position(windowWidth/3, windowHeight/3 + 70);

        this.qualification.html('QUALIFICATION*');
        this.qualification.position(windowWidth/3, windowHeight/3 + 140);

        this.occupation.html('OCCUPATION*');
        this.occupation.position(windowWidth/3, windowHeight/3 + 210);

        this.fn_input.position(windowWidth/2 - 30, windowHeight/3 - 185);
        this.mn_input.position(windowWidth/2 - 30, windowHeight/3 - 115);
        this.ei_input.position(windowWidth/2 - 30, windowHeight/3 - 45);
        this.ag_input.position(windowWidth/2 - 30, windowHeight/3 + 25);
        this.gd_input.position(windowWidth/2 - 30, windowHeight/3 + 95);
        this.qf_input.position(windowWidth/2 - 30, windowHeight/3 + 165);
        this.op_input.position(windowWidth/2 - 30, windowHeight/3 + 235);

        this.submit.position(windowWidth/2 + 250, windowHeight - 150);
    }
}