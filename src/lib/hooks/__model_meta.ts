/* eslint-disable */
const metadata = {
    fields: {
        file: {
            id: {
                name: 'id',
                type: 'Int',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
                isAutoIncrement: true,
            },
            name: {
                name: 'name',
                type: 'String',
            },
        },
    },
    uniqueConstraints: {
        file: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
    },
    deleteCascade: {},
};
export default metadata;
