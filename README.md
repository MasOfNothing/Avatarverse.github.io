# Avatarverse Wiki Editing Help Guide

- [Avatarverse Wiki Editing Help Guide](#avatarverse-wiki-editing-help-guide)
    - [Page Structure](#page-structure)
    - [Content Structures](#content-structures)
      - [Text Stylings For Paragraphs and Titles](#text-stylings-for-paragraphs-and-titles)
      - [Adding a List of content](#adding-a-list-of-content)
      - [Adding a Table](#adding-a-table)
      - [Adding Images](#adding-images)
      - [Adding a Button Image](#adding-a-button-image)


### Page Structure

The wiki is written in HTML, CSS & JavaScript
Each page is structured this way:
```html
<html>
    <head>
        <!--Important information each page has 
        such as links to styling files (css), icon libraries
        encryption type, screen sizing, page icon & title below-->
        <title>Page Title</title>
    </head>
    <body>
        <header><!--The header in each page--></header>
        <div class="pagecontainer"> 
            <!--Important for left navigation and 
            right content placement-->

            <nav> <!--Navigation-->
                <section class="nav1"> 
                    <!-- Navigation Section with hover color-->
                    <h4>Title of Section</h4>
                    <ul> <!---Section links-->
                        <li><a href="path to page/link">Link</a></li>
                    </ul>
                </section>
            </nav>

            <main>
                <!-- Main Content of the page-->
                <h3>Page/Main Content Title</h3>
                <section>
                    <!--Content Section-->
                    <h4>Section Title</h4>
                    <h5 class="bold">SubTitle</h5> <!--Optional-->
                    <p>Content paragraph</p>
                    <!-- Other content structures listed below-->
                </section>
            </main>      
        </div>

        <footer>
            <!--Footer Stuff with Logo, Copyright, Links,
            found in each page-->
        </footer>
    </body>
</html>
```

### Content Structures

#### Text Stylings For Paragraphs and Titles
```html
<!--Bold Text-->
<p><span class="bold">Bolded Text</span></p>
<h5 class="bold"></h5>

<!--Italic Text-->
<p><span class="italic">Italic Text</span></p>
<h5 class="italic"></h5>

<!--Colored Text-->
<p><span class="selectedgray">Text</span></p>
<p><span class="selectedblue">Text</span></p>
<p><span class="selectedgreen">Text</span></p>
<p><span class="selecteddarkgreen">Text</span></p>
<p><span class="selectedred">Text</span></p>
<p><span class="selectedorange">Text</span></p>
<p><span class="selectedyellow">Text</span></p>
<p><span class="selectedpurple">Text</span></p>
<h5 class="selectedgray"></h5> <!--and all other colors above-->


<!--Anchored Text (to a page or link)-->
<!--target-"_blank" opens in new tab-->
<p><a target="_blank" href="link/path to page">Text</a></p>
```

#### Adding a List of content
```html
<!--Adds a list with a dash -->
<ul class="dashList">
    <li>Listed Content</li>
    <li>2nd Listed Content</li>
</ul>

<!--Adds a list with a circle -->
<ul class="circleList">
    <li>Listed Content</li>
    <li>2nd Listed Content</li>
</ul>

<!--Adds a list with a square -->
<ul class="squareList">
    <li>Listed Content</li>
    <li>2nd Listed Content</li>
</ul>

<!--Adds a list with an ordered lowercase letter -->
<ul class="letterList">
    <li>Listed Content</li>
    <li>2nd Listed Content</li>
</ul>

<!--Adds a list with an ordered number -->
<ul class="numberList">
    <li>Listed Content</li>
    <li>2nd Listed Content</li>
</ul>

<!--Text stylings and anchor can apply here too, just replace <p> with <li>-->
```
#### Adding a Table
```html
<div class="table">
    <div class="tabletitle"> <!--Title Row-->
        <p>1st Column Title Text</p>
        <p>2nd Column Title Text</p>
    </div>
    <div class="tableitems"> <!--First Row below Title Row-->
    <!--Number of Columns MUST BE EQUAL to number of title Columns-->
        <p>1st Column Content</p>
        <p>2nd Column Content</p>
    </div>
    <div class="tableitems"> <!--Second Row below Title Row-->
        <p>1st Column Content</p>
        <p>2nd Column Content</p>
    </div>
</div>

<!--You can also color the background of all cells in a row
by adding a color class to the div-->
<div class="tableitems air"></div>
<div class="tableitems water"></div>
<div class="tableitems earth"></div>
<div class="tableitems fire"></div>

<!--Text stylings and anchor can apply here too-->
```


#### Adding Images
```html
<figure class="alignCenter">
    <img src="path/link to image" alt="Img context for accessibility">
</figure>



<!-- Images are automatically sized to 60% of their width
to make them smaller there are these current options to add to
the figure class (multiple classes can be added separated by a space)-->
<figure class="mediumimg"></figure>

<figure class="smallimg"></figure>

<figure class="smallerimg"></figure>

<!-- Image alignment left, center/centre, right-->
<figure class="alignLeft"></figure>

<figure class="alignCenter"></figure>
<figure class="alignCentre"></figure>

<figure class="alignRight"></figure>

<!-- Multi class example, order does not matter-->
<figure class="alignRight smallimg"></figure>

<!-- Add images on the same line (wraps to next line if many)-->
<div class="togetherimg">
    <figure>
        <img>
    </figure> 
</div>

<!--Add a series of images in pairs of 2 per "line"-->
<div class="doubleimg">
    <figure>
        <img>
    </figure> 
</div>
```
#### Adding a Button Image
```html
<figure>
        <a class="buttonIMG" target="_blank" href="path to page/link">
            <img src="path/link to image" alt="Image description">
        </a>
        <figcaption>Text associated with button</figcaption> <!--optional-->
</figure>
```

