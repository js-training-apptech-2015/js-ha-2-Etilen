QUnit.test( "Task 1", function( assert ) {
    var o = {
        x: 1,
        foo: function (a, b) {
            return this.x + a + b;
        }
    };
    var f1 = o.foo.bind({x:2}, 1);
    var f2 = bind(o.foo, {x:2}, 1);
    var f3 = bind(bind(o.foo, {x:2}), {}, 1);
    assert.equal(f2(5), f1(5));
    assert.equal(f3(5), f1(5));
});

QUnit.test( "Task 2", function( assert ) {
    var o = {
        x: 1,
        foo: function (a, b) {
            return this.x + a + b;
        }
    };
    var f1 = rebind(o.foo, {x:2});
    var f2 = rebind(f1, {x:3});
    assert.equal(f1(1, 1), 4);
    assert.equal(f2(1, 1), 5);

    function b(a,b,c) {
        return this.c + a + b + c;
    }
    var b1 = rebind(b, {c: 5}, 1);
    var b2 = rebind(b1, {c: 16}, 1);
    var b3 = rebind(b2, {c: 17}, 1);
    assert.equal(b1(1,1), 8);
    assert.equal(b2(1), 19);
    assert.equal(b3(), 20);
});

QUnit.test( "Task 3", function( assert ) {
    var acc = add(1).add(2).add(3).add(4);
    var acc1 = add(1).add(2);
    var acc2 = acc1.add(1).add(2);
    assert.equal(acc + 5, 15);
    assert.equal(acc1 + 1, 4);
    assert.equal(acc2 + 1, 7);
});