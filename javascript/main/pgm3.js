module.exports = ( num = 0 ) =>
{
    let x = 0;
    let y = 1;
    console.log( x );
    console.log( y );
    for( let index = 0; index < num; index++ )
    {
        x += y;
        y += x;
        console.log( x );
        console.log( y );
    }
    return [ x, y ];
};