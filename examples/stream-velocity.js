"use strict";

var sphero = require("../");
var orb = sphero("/dev/rfcomm0");

orb.connect(function() {
  orb.streamVelocity();

  orb.on("velocity", function(data) {
    console.log("::STREAMING VELOCITY::");
    console.log("  data:", data);
  });

  orb.roll(180, 0);
});
