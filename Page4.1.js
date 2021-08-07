class Page4_1
{
    constructor()
    {
        this.problem = createElement('h1');

        this.family = createButton('FAMILY PROBLEMS')
        this.relationship = createButton('RELATIONSHIP ISSUES')
        this.studies = createButton('STUDIES');
        this.work_business = createButton('WORK / BUSINESS');
        this.others = createButton('OTHERS');
    }

    hide()
    {
        this.problem.hide();

        this.family.hide();
        this.relationship.hide();
        this.studies.hide();
        this.work_business.hide();
        this.others.hide();
    }

    display()
    {
        this.problem.html('WHAT KIND OF PROBLEM ARE YOU FACING?');
        this.problem.position(windowWidth/3.5 - 30, windowHeight/4);

        this.family.position(windowWidth/3.8, windowHeight/3 + 50);
        this.relationship.position(windowWidth/3.8, windowHeight/3 + 80);
        this.studies.position(windowWidth/3.8, windowHeight/3 + 110);
        this.work_business.position(windowWidth/3.8, windowHeight/3 + 140);
        this.others.position(windowWidth/3.8, windowHeight/3 + 170)
    }
}