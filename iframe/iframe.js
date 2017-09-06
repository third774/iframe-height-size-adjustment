function resize(e) {
    console.log('sending resize postMessage')
    var content = document.getElementById('content')
    var wrapper = document.getElementById('wrapper')
    var body = document.querySelector('body')
    var html = document.querySelector('html')

    // const firstChildMarginTop = Number(window.getComputedStyle(content.children[0], null).marginTop.replace('px', ''))
    // const firstChildMarginBottom = Number(window.getComputedStyle(content.children[content.childElementCount - 1], null).marginBottom.replace('px', ''))

    var height = wrapper.scrollHeight;
    // var height = window.innerHeight;
    window.parent.postMessage('resize:' + height + 'px', '*')
}

resize()

var heightListener = document.getElementById('height-listener')

heightListener.contentWindow.addEventListener('resize', function(e) {
    resize(e)
})













// do some stuff to change the height

// Create Element.remove() function if not exist
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

var p = document.createElement('p')
p.textContent = "Vice readymade whatever sartorial YOLO pickled Blue Bottle mixtape stumptown Echo Park put a bird on it distillery hella shabby chic banjo small batch Austin Schlitz leggings dreamcatcher raw denim mustache chia church-key bitters vinyl iPhone kogi kitsch twee letterpress wolf Pinterest Marfa before they sold out Bushwick ugh heirloom 90's swag PBR&B pug try-hard tattooed seitan High Life gluten-free locavore viral single-origin coffee salvia cliche Neutra Odd Future quinoa artisan master cleanse PBR cornhole meggings meh actually Truffaut gastropub Thundercats fanny pack tofu deep v fap normcore cray yr kale chips blog brunch Wes Anderson direct trade  irony freegan food truck skateboard mlkshk Etsy XOXO fashion axe 3 wolf moon ethical art party pour-over typewriter plaid sriracha sustainable banh mi Cosby sweater Williamsburg +1 jean shorts American Apparel wayfarers butcher pork belly flexitarian 8-bit paleo cred VHS scenester keytar literally umami next level street art Godard synth gentrify vegan aesthetic disrupt hoodie authentic roof party occupy DIY Banksy trust fund retro bicycle rights hashtag you probably haven't heard of them tousled chillwave four loko cardigan craft beer selfies lo-fi semiotics McSweeney's pop-up fixie keffiyeh biodiesel post-ironic fingerstache organic chambray lomo squid Tonx polaroid Pitchfork Intelligentsia crucifix flannel tote bag asymmetrical Brooklyn selvage drinking vinegar forage beard Tumblr Kickstarter messenger bag ennui farm-to-table Shoreditch mumblecore bespoke Portland narwhal Carles Helvetica photo booth slow-carb"

setTimeout(function() {
    document.getElementById('content').appendChild(p)
}, 2000)

setTimeout(function() {
    setInterval(function() {
        p.remove();
    }, 2000)
}, 1000);