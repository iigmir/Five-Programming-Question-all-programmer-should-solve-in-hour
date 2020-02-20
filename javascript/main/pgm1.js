const for_sum = list =>
{
    let n = 0;
    for( let i = 0; i < list.length; i++ )
    {
        n += list[ i ];
    }
    return n;
    //list
};
const while_sum = list =>
{
    let n = 0;
    let i = 0;
    while( i < list.length )
    {
        n += list[ i ];
        i += 1;
    }
    return n;
};;
const recursion_sum = list =>
{
    const rmain = (list, index, sum) =>
    {
        if( index === list.length )
        {
            return sum;
        }
        else
        {
            return rmain( list, index + 1, sum + list[ index ] );
        }
    }
    return rmain( list, 0, 0 );
};

module.exports.for_sum = for_sum;
module.exports.while_sum = while_sum;
module.exports.recursion_sum = recursion_sum;
