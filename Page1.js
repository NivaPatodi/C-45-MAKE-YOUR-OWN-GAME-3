class Page1
{
    constructor()
    {
        this.greeting = createElement('h1');
        this.title = createElement('h1');
        this.next = createButton('Next');
    }

    hide()
    {
        this.greeting.hide();
        this.title.hide();
        this.next.hide();
    }

    display()
    {
        this.greeting.html("WELCOME TO");
        this.greeting.position(windowWidth/2 - 90, windowHeight/2 - 150);
        this.greeting.style('color', 'black');

        this.title.html("MIND-HEALER: COUNSELING APP");
        this.title.position(windowWidth/2 - 250, windowHeight/2 - 80);
        this.title.style('color', 'black');

        this.next.position(windowWidth-100, windowHeight-70);

        this.next.mousePressed(() =>
        {
            this.greeting.hide();
            this.title.hide();
            this.next.hide();

            page_2 = new Page2();
            page_2.display();
        })
    }
}