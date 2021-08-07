class Page2
{
    constructor()
    {
        this.student = createButton('STUDENT');
        this.counselor = createButton('COUNSELOR');
    }

    hide()
    {
        this.student.hide();
        this.counselor.hide();
    }

    display()
    {
        this.student.position(windowWidth/2.5, windowHeight/2);
        this.counselor.position(windowWidth/1.8, windowHeight/2);

        this.student.mousePressed(() =>
        {
            this.student.hide();
            this.counselor.hide();

            page_3_1 = new Page3_1();
            page_3_1.display();
        })

        this.counselor.mousePressed(() =>
        {
            this.student.hide();
            this.counselor.hide();

            page_3_2 = new Page3_2();
            page_3_2.display();
        })
    }
}