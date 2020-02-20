module.exports = (list1=[], list2=[]) =>
{
    let a = [];
    list1.map( (item, index) =>
    {
        a.push( list1[index] );
        a.push( list2[index] );
    });
    return a;
};
