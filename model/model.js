var homeContent = `<div class="homeContent">
<div class="icon">
    <img src="assets/mask-icon.jpeg" alt="mask">
</div>
<h1>We Sell Masks!</h1>
<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio accusamus excepturi,
    doloremque, cupiditate, earum ipsam eius vel nostrum pariatur mollitia. Sit, asperiores tempore facere
    qui architecto voluptatem suscipit itaque!
    Ipsa iusto recusandae omnis minima blanditiis, dolore aliquam dolores non sed ducimus, sit quibusdam
    fuga dignissimos, minus provident quam. Voluptatem veritatis soluta eum voluptatibus expedita quibusdam
    nostrum dolor cumque reprehenderit.
    Sit reiciendis illo qui quod pariatur delectus molestiae repellat ullam vel culpa esse maxime mollitia
    non rem cumque illum praesentium corrupti dolore, voluptatum aliquam? Non quidem ea labore perspiciatis
    nobis?
</p>
<div class="hero">
    <!-- IMAGE IN CSS -->
</div>
<h1>Please Buy Our Masks!</h1>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam similique corporis dicta deleniti
    repellat itaque ea dolorem id saepe maxime porro, velit eaque, distinctio voluptatem nesciunt magni
    accusantium quam? Autem.
    Officiis ad facere alias cumque, ipsam quasi possimus consequuntur accusamus magnam aliquid, tempore
    porro vitae doloribus voluptatum distinctio dolorem ratione iusto consectetur voluptatem? Dolor, numquam
    possimus rerum dolore consectetur quos?
</p>
<h1>Please!</h1>
</div>`;
var aboutContent = `<div class="aboutContent">
<h1>We're Pretty Cool!</h1>
<div class="person">
    <div class="person-one"></div>
    <p>
        <strong>Matt</strong>
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis deserunt id odio voluptatem
        unde architecto, vel voluptatum at est amet veritatis qui, labore, pariatur dolore iusto sit veniam
        provident.
    </p>
</div>
<div class="person">
    <div class="person-two"></div>
    <p>
        <strong>Emm</strong>
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis deserunt id odio voluptatem
        unde architecto, vel voluptatum at est amet veritatis qui, labore, pariatur dolore iusto sit veniam
        provident.
    </p>
</div>
<div class="person">
    <div class="person-three"></div>
    <p>
        <strong>Timn</strong>
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis deserunt id odio voluptatem
        unde architecto, vel voluptatum at est amet veritatis qui, labore, pariatur dolore iusto sit veniam
        provident.
    </p>
</div>
<div class="person">
    <div class="person-four"></div>
    <p>
        <strong>Tina</strong>
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reiciendis deserunt id odio voluptatem
        unde architecto, vel voluptatum at est amet veritatis qui, labore, pariatur dolore iusto sit veniam
        provident.
    </p>
</div>
</div>`;
var productsContent = `<div class="productsContent">
<h1>Our Masks</h1>
<div class="products">
    <div class="mask-row">
        <div class="mask">
            <div class="mask-one-image">
                <!-- IMAGE IN CSS -->
            </div>
            <p><strong>"I Hate This Mask"</strong></p>
            <p><strong>$9.99</strong></p>
        </div>
        <div class="mask">
            <div class="mask-two-image">
                <!-- IMAGE IN CSS -->
            </div>
            <p><strong>"helth"</strong></p>
            <p><strong>$20.00</strong></p>
        </div>
    </div>
    <div class="mask-row">
        <div class="mask">
            <div class="mask-three-image">
                <!-- IMAGE IN CSS -->
            </div>
            <p><strong>"no vimrus pleamse"</strong></p>
            <p><strong>$2.99</strong></p>
        </div>
        <div class="mask">
            <div class="mask-four-image">
                <!-- IMAGE IN CSS -->
            </div>
            <p><strong>"Grumpy Cat"</strong></p>
            <p><strong>$15.15</strong></p>
        </div>
    </div>
</div>
</div>`;
var contactContent = `<div class="contactContent">
<h1>Contact Us!</h1>
<p>Let us know if you have any questions about our company or our products. If you just want to tell us how
    great we are, that's cool too!</p>
<div class="column-holder">
    <div class="column map">
        <!-- IMAGE IN CSS -->
    </div>
    <div class="column">
        <form action="#">
            <input type="text" placeholder="first name">
            <input type="text" placeholder="last name">
            <input type="email" placeholder="email">
            <textarea name="details" id="textarea" cols="30" rows="9" placeholder="details"></textarea>
            <input type="submit" class="submit">
        </form>
    </div>
</div>
</div>`;

export function getPageContent(pageId) {
    $("#app").html(eval(pageId));
}