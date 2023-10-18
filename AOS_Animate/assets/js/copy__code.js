var textosACopiar = {
    0: 'data-aos="fade-up"',
    1: 'data-aos="fade-down"',
    2: 'data-aos="fade-right"',
    3: 'data-aos="fade-left"',
    4: 'data-aos="fade-up-right"',
    5: 'data-aos="fade-up-left"',
    6: 'data-aos="fade-down-right"',
    7: 'data-aos="fade-down-left"',
    8: 'data-aos="flip-left"',
    9: 'data-aos="flip-right"',
    10: 'data-aos="flip-up"',
    11: 'data-aos="flip-down"',
    12: 'data-aos="zoom-in"',
    13: 'data-aos="zoom-in-up"',
    14: 'data-aos="zoom-in-down"',
    15: 'data-aos="zoom-in-left"',
    16: 'data-aos="zoom-in-right"',
    17: 'data-aos="zoom-out"',
    18: 'data-aos="zoom-out-up"',
    19: 'data-aos="zoom-out-down"',
    20: 'data-aos="zoom-out-right"',
    21: 'data-aos="zoom-out-left"',
    22: 'data-aos="fade-up" data-aos-duration="3000"',
    23: 'data-aos="fade-down" data-aos-easing="linear"',
    24: 'data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"',
    25: 'data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-offset="500"',
    26: 'data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"',
    27: 'data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"',
    28: 'data-aos"fade-up" data-aos-anchor-placement="top-bottom"',
    29: 'data-aos="fade-up" data-aos-anchor-placement="center-bottom"',
    30: 'data-aos="fade-up" data-aos-anchor-placement="center-bottom"',
    31: 'data-aos="fade-up" data-aos-anchor-placement="top-center"',
    32: '<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>'
};

document.querySelectorAll(".copyButton").forEach(function(button, index) {
    button.addEventListener("click", function() {
        var textToCopy = textosACopiar[index];

        var input = document.createElement("input");
        input.setAttribute("value", textToCopy);
        document.body.appendChild(input);

        input.select();
        document.execCommand("copy");

        document.body.removeChild(input);
    });
});
