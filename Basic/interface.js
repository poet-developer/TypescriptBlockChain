var Me = { name: 'iro' };
function showName() {
    console.log(this.name);
}
var me = showName.bind(Me);
me();
