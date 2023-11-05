div: Generates an empty <div> element.

ul>li*2: Creates an unordered list (<ul>) with two list items (<li>).

div.my-class#my-id: Generates a <div> element with a class of "my-class" and an ID of "my-id".

a[href="https://example.com"]: Creates an anchor (<a>) element with an href attribute linking to "https://example.com".

p{This is some text}: Generates a paragraph (<p>) element with the text "This is some text" inside.

div+div: Creates two adjacent <div> elements.

ul>li*3: Generates an unordered list (<ul>) with three list items (<li>).

ul>li*2: Creates an unordered list (<ul>) with two list items (<li>).

section>h1+ul>li*3>a: Generates a <section> element containing an <h1> heading and an unordered list with three list items, each containing an anchor (<a>).

table>tr*3>td*4: Creates an HTML table with three rows, each containing four table cells.

div.container>div.row>div.col-md-6: Generates a Bootstrap-style container, row, and two columns inside a <div>.

button.btn.btn-primary: Creates a Bootstrap-style primary button.

form>input[type=text]+button[type=submit]: Generates a form with a text input and a submit button.

ul>li*5>a[href="#"]: Creates an unordered list with five list items, each containing an anchor with a "href" attribute of "#".

header>nav>ul>li*4>a: Generates a header with a navigation menu consisting of four list items, each containing an anchor.

ul>li*4>span.item$: Creates an unordered list with four list items, each containing a <span> element with a unique number based on position.

div#wrapper>header#header>nav#main-nav>ul#menu>li.menu-item*5>a: Generates a structured page layout with specific IDs and classes.

ul>li.item$*4: Creates an unordered list with four list items, each containing text "item1," "item2," and so on.

div.wrapper>header#site-header+nav#site-nav>ul#menu>li.menu-item*5>a: Creates a structured page layout with specific IDs and classes.

ul>li.item$$$*4: Generates an unordered list with four list items, each containing unique numbers based on position.

div>h1{Hello, World!}+p{This is a paragraph.}: Creates a <div> containing an <h1> with "Hello, World!" and a <p> with "This is a paragraph."

table>thead>tr>th*3+tbody>tr>td*3: Generates an HTML table with a header row and a body row, each containing three cells.

form>label+input[type="text"]+button[type="submit"]: Creates a form with a label, a text input, and a submit button.

ul>li.item$@-*4: Generates an unordered list with four list items in reverse order, with text like "item4," "item3," and so on.

nav>ul>li.item$@3*4>a: Creates a navigation menu with four list items, each containing an anchor with a number starting at 3.

a{Click me}: Creates a simple anchor (<a>) with the text "Click me."

img[src="image.jpg" alt="My Image"]: Generates an image (<img>) element with the specified source and alt attributes.

ul>li.item$$$@-2*3: Creates an unordered list with three list items, each containing unique numbers in descending order.

button.btn.btn-success[type="button"][data-action="submit"]: Generates a Bootstrap-style success button with a "data-action" attribute.

section#intro>h1{Welcome to My Website}+p{This is the introduction.}: Creates a section with an <h1> and a paragraph for a website's introduction.

ul>li*6>a[href="#section$"]: Generates an unordered list with six list items, each containing an anchor with a unique section number.

form>div.form-group>label+input.form-control[type="text"]: Creates a form with a labeled text input using Bootstrap classes.

ul>li.item$*3>a[href="#section$"]: Generates an unordered list with three list items, each containing an anchor with a unique section number.