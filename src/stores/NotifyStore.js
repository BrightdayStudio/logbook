const NotifyStore = {
  data: {
    notes: [
      {
        'id': '0',
        'note': "Don't forget to submit your Doc33 by 18th October latest to your senior LSA."
      },
      {
        'id': '1',
        'note': 'New Review crib sheet is now on Google Drive'
      },
      {
        'id': '2',
        'note': "Charlotte's group are meeting at 9am in the refectory at 11am on 18th Oct."
      }
    ]
  },
  methods: {
    addnote (name) {
      NotifyStore.data.notes.push(name)
    }
  }
}

export default NotifyStore
