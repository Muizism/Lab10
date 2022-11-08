const t=require("./task_1");
const t2 = require("./task_2");
const t3 = require("./task_3");
const t4 = require("./task_4");
const t5 = require("./task_5");

test("Testing sum", ()=>
{
    expect (t.sum(1,2)).toBe(3);

});



test("Testing subtract", ()=>
{
    expect (t.subtract(1,2)).toBe(-1);

});



test("Testing multiply", ()=>
{
    expect (t.multiply(1,2)).toBe(2);

});



test("Testing division", ()=>
{
    expect (t.division(1,2)).toBe(0.5);

});



test("Testing Sum_Multiples", ()=>
{
    expect (t2.check_fun(5,10)).toBe(23);

});


test("Testing Power", ()=>
{
    expect (t3.pow(5,2)).toBe(25);

});



test("Testing round", ()=>
{
    expect (t3.round_fun(5.4)).toBe(5);

});



test("Testing ceiling", ()=>
{
    expect (t3.ceiling(5.4)).toBe(6);

});


test("Testing reverse string", ()=>
{
    expect (t4.reverse_string('hello world')).toBe('dlrow olleh');

});

test("Testing find_element", ()=>
{
    expect (t5.check_element(5)).toBe(true);

});