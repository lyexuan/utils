const list = [
    {id: 1, pid: 0},
    {id: 11, pid: 1},
    {id: 111, pid: 11},
    {id: 2, pid: 0},
    {id: 22, pid: 2},
    {id: 222, pid: 22}
]

function listToTree(list, option){
    const defaultOption = {
        key: 'id',
        pkey: 'pid',
        childName: 'children',
        rootValue: 0
    };
    option = {...defaultOption, ...option};
    const { key, pkey, childName, rootValue } = option;
    let treeData = [];
    const dataMap = {};
    list.forEach(item => {
        const pid = item[pkey];
        if(!dataMap[pid]){
            dataMap[pid]=[];
        }
        dataMap[pid].push(item);
    })

    const level0 = dataMap[rootValue];

    treeData = format(level0);

    function format(list){
        return list.map(item => {
            const id = item[key];
            if(dataMap[id]){
                return {
                    ...item,
                    [childName]: format(dataMap[id])
                }
            }
            return item; 
        })
    }

    return treeData;
}

console.log(listToTree(list))