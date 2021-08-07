class Page3_1
{
    constructor()
    {
        this.firstName = createElement('h2');
        this.lastName = createElement('h2');
        this.mobileNo = createElement('h2');
        this.emailId = createElement('h2');

        this.fn_input = createInput("");
        this.ln_input = createInput("");
        this.mn_input = createInput("");
        this.ei_input = createInput("");

        this.submit = createButton('SUBMIT');
    }

    hide()
    {
        this.firstName.hide();
        this.lastName.hide();
        this.mobileNo.hide();
        this.emailId.hide();

        this.fn_input.hide();
        this.ln_input.hide();
        this.mn_input.hide();
        this.ei_input.hide();

        this.submit.hide();
    }

    display()
    {
        this.firstName.html('FIRST NAME');
        this.firstName.position(windowWidth/3, windowHeight/3 - 70);

        this.lastName.html('LAST NAME');
        this.lastName.position(windowWidth/3, windowHeight/3);

        this.mobileNo.html('MOBILE NO.*');
        this.mobileNo.position(windowWidth/3, windowHeight/3 + 70);

        this.emailId.html('EMAIL ID*');
        this.emailId.position(windowWidth/3, windowHeight/3 + 140);

        this.fn_input.position(windowWidth/2 - 30, windowHeight/3 - 48);
        this.ln_input.position(windowWidth/2 - 30, windowHeight/3 + 25);
        this.mn_input.position(windowWidth/2 - 30, windowHeight/2 - 33);
        this.ei_input.position(windowWidth/2 - 30, windowHeight/2 + 38);

        this.submit.position(windowWidth/2 + 250, windowHeight - 150);

        this.submit.mousePressed(() =>
        {
            this.firstName.hide();
            this.lastName.hide();
            this.mobileNo.hide();
            this.emailId.hide();
    
            this.fn_input.hide();
            this.ln_input.hide();
            this.mn_input.hide();
            this.ei_input.hide();
    
            this.submit.hide();

            page_4_1 = new Page4_1();
            page_4_1.display();
        })
    }
}