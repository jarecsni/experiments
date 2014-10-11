/**
 * Created by janos on 11/10/2014.
 */
define(function (require) {
    var button = document.createElement("button");
    button.onclick = function ()
    {
        require(["alerter"], function(alerter) {
            alerter("Hello from the app");
        });
    };
    button.textContent = "Click me to load alerter.";
    document.body.appendChild(button);
});