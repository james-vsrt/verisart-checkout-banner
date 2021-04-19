
const htmlString = `
<div> <style>#verisart-cert-wrapper{border: 1px solid #D4D4D4; box-sizing: border-box; border-radius: 4px; padding: 15px; margin: 15px 0;}#verisart-cert-header-wrapper{display: flex; justify-content: space-between; flex-direction: column-reverse;}@media screen and (min-width: 550px){#verisart-cert-header-wrapper{flex-direction: row;}}</style> <div id='verisart-cert-wrapper'> <div id='verisart-cert-header-wrapper'> <h2 style='padding-top: 10px;'>Claim your certificate</h2> <svg width="182" height="62" viewBox="0 0 182 62" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <path d="M11.9664 12.3782L15.9656 21.3443L14.2201 21.7225L10 12.3782H11.9664ZM20.1415 30.822L28.405 12.3782H30.283L20.495 34.1592L19.8985 34.2705L14.9492 23.3466L16.6947 22.9684L20.1415 30.822ZM49.3509 12.3782L48.7101 14.0246H35.6521L36.2928 12.3782H49.3509ZM38.0383 15.3595V32.3126H49.5055L48.8648 33.959H36.2928V15.7822L38.0383 15.3595ZM46.9646 23.6581H39.2756L39.9164 22.0117H47.6054L46.9646 23.6581ZM64.7068 24.37L71.3794 33.9368L69.5676 34.3372L62.8508 24.5925H59.1831L59.7796 22.9461H62.8729C65.7673 22.9461 67.8884 21.0773 67.8884 18.3407C67.8884 15.8489 65.8557 14.0023 62.6519 14.0023H55.6258L56.2223 12.356H62.7403C67.0488 12.356 69.7223 14.8923 69.7223 18.2518C69.7665 21.5222 67.5349 23.7026 64.7068 24.37ZM56.2444 33.959V15.7822L57.9899 15.3817V33.9813H56.2444V33.959ZM78.516 33.959V12.4005L80.2615 12V33.959H78.516ZM100.279 28.2412C100.279 31.6007 97.4071 34.404 93.3858 34.404C91.1321 34.404 88.6354 33.4251 87.0004 32.2014L87.9505 30.7553C89.4308 31.8454 91.5299 32.6909 93.3858 32.6909C96.3244 32.6909 98.4455 30.7775 98.4455 28.3525C98.4455 23.5691 88.061 23.0796 88.061 17.5176C88.061 14.603 90.403 12 94.1812 12C96.214 12 98.4013 12.7787 99.9922 13.8689L99.1526 15.2927C97.6059 14.3583 95.75 13.7131 94.137 13.7131C91.4636 13.7131 89.9169 15.5152 89.9169 17.4063C89.8948 21.7447 100.279 22.2342 100.279 28.2412ZM119.391 23.4578L115.657 15.4262L106.996 33.959H105.118L115.348 12.267L115.945 12.1557L121.137 23.1686L119.391 23.4578ZM112.918 24.993H121.999L126.219 33.9145H124.296L120.916 26.6393H112.166L112.918 24.993ZM140.426 24.37L147.098 33.8923L145.287 34.2927L138.57 24.548H134.946L135.543 22.9016H138.636C141.53 22.9016 143.652 21.0328 143.652 18.2963C143.652 15.8044 141.619 13.9578 138.415 13.9578H131.389L131.985 12.3115H138.503C142.812 12.3115 145.485 14.8478 145.485 18.2073C145.507 21.5222 143.276 23.7026 140.426 24.37ZM131.963 33.959V15.7822L133.709 15.3817V33.9813H131.963V33.959ZM150.788 12.3782H168L167.403 14.0246H150.192L150.788 12.3782ZM158.212 33.959V15.7822L159.913 15.3817V33.9813H158.212V33.959Z" fill="black"/> <path d="M109.471 47.6195C109.36 48.3537 109.206 48.7319 108.808 49.1769C108.322 49.7331 107.703 49.9778 106.886 49.9778C106.046 49.9778 105.427 49.6886 104.986 49.1101C104.433 48.4204 104.146 47.486 104.146 46.4181C104.146 44.26 105.229 42.8806 106.93 42.8806C108.322 42.8806 109.228 43.7483 109.471 45.3279L108.322 45.4614C108.189 44.883 108.101 44.6605 107.902 44.3935C107.681 44.1043 107.328 43.904 106.93 43.904C106.002 43.904 105.472 44.8162 105.472 46.4181C105.472 48.0422 106.024 48.9544 106.974 48.9544C107.681 48.9544 108.234 48.3759 108.322 47.486L109.471 47.6195Z" fill="black"/> <path d="M112.498 49.8889V42.9919H116.895V44.0154H113.713V45.8842H116.276V46.8854H113.735V48.821H116.939V49.8889H112.498Z" fill="black"/> <path d="M124.098 49.8889L123.037 47.0634H121.292V49.8889H120.054V42.9919H123.015C123.833 42.9919 124.363 43.1477 124.805 43.5259C125.202 43.8819 125.423 44.3936 125.423 45.0165C125.423 45.9065 125.048 46.4849 124.186 46.8409L125.379 49.8889H124.098ZM122.838 46.0622C123.678 46.0622 124.142 45.684 124.142 44.9943C124.142 44.3713 123.678 43.9709 122.927 43.9709H121.292V46.04H122.838V46.0622Z" fill="black"/> <path d="M129.82 49.8889V44.0599H128.008V42.9919H132.98V44.0599H131.168V49.8889H129.82Z" fill="black"/> <path d="M135.786 49.8889V42.9919H137.023V49.8889H135.786Z" fill="black"/> <path d="M140.58 49.8889V42.9919H144.911V44.0599H141.84V45.951H144.248V46.9744H141.84V49.8889H140.58Z" fill="black"/> <path d="M147.849 49.8889V42.9919H149.087V49.8889H147.849Z" fill="black"/> <path d="M152.644 49.8889V42.9919H157.041V44.0154H153.859V45.8842H156.4V46.8854H153.859V48.821H157.063V49.8889H152.644Z" fill="black"/> <path d="M160.178 42.9919H162.697C163.581 42.9919 164.244 43.2589 164.818 43.8596C165.459 44.5271 165.791 45.3948 165.791 46.4404C165.791 47.5973 165.371 48.5985 164.62 49.2215C164.067 49.6664 163.338 49.9111 162.432 49.9111H160.201V42.9919H160.178ZM162.454 48.8877C163.647 48.8877 164.443 47.9088 164.443 46.4182C164.443 44.9943 163.692 43.9931 162.609 43.9931H161.438V48.8877H162.454Z" fill="black"/> </g> <defs> <filter id="filter0_d" x="0" y="0" width="182" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dx="2"/> <feGaussianBlur stdDeviation="6"/> <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.0666667 0 0 0 0.2 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg> </div><p style="margin:35px 0 15px;"> Your order includes a Certificate of Authenticity by Verisart. You’ll receive a confirmation email with a link to claim your certificate shortly. </p><a href="https://verisart.com/verisart-certified"> Learn more about Verisart Certificates </a> </div></div>
`

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

const certifiedItemsInCheckout = Shopify.checkout.line_items.filter(item => {
    if (item.properties['Verisart Certificate of Authenticity']) {
        return item.id
    }
})

function addBannerToPage() {
    const sectionContainer = document.querySelector('.section__content')
    const verisartBanner = createElementFromHTML(htmlString)
    if (certifiedItemsInCheckout.length > 0) {
        sectionContainer.insertBefore(verisartBanner, sectionContainer.children[1]);
    }
    observer.disconnect()
}

let observer = new MutationObserver((mutations) => {

    mutations.forEach((mutation) => {
        if (!mutation.addedNodes) return

        for (let i = 0; i < mutation.addedNodes.length; i++) {
            // do things to your newly added nodes here
            let node = mutation.addedNodes[i]
            node.className === 'flag-selector__select' && addBannerToPage()
        }
    })
})

observer.observe(document.body, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
})

