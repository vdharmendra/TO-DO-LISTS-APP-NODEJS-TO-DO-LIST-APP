// # Chapter: 5
// PASSING DATA FROM YOUR WEBPAGE TO YOUR SERVER
exports.getDate = function(){
    const today = new Date();
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long',
    };
    return today.toLocaleDateString('en-US', options);
};

exports.getDay = function(){
    const today = new Date();
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long',
    };
    return today.getDay();
}