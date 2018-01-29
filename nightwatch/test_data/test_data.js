module.exports = {

    goodData: {
        transaction1: {
            name: 'a',
            phone: '1234567890',
            title: 'j'
        },
        transaction2: {
            name: 'sdfghjkl 567#$%',
            phone: '98561204-54(801)',
            title: 'asdfkasdfsdafjksdfjkhskdfl'
        },

        transaction3: {
            name: 'Adam ',
            phone: '98561204-54(801)',
            title: 'Mentor',
        },
    },

    badData: {
        transaction1: {
            name: '',
            phone: '',
            title: ''
        },
        errorMessages: {
            nameErr: 'Name field should be between 1-30 any allowed'
        }
    }
}