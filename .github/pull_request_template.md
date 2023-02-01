- type: input
    id: contact
    attributes:
      label: Contact Details
      description: Write your contact details
      placeholder: e.x. email@gmail.com
    validations:
      required: true
- type: input
    id: function
    attributes:
      label: Requested function
      description: Describe what you want to see happening?
      placeholder: That I have infinite XP
    validations:
      required: true
      - type: textarea
    id: existingcode
    attributes:
      label: Any existing code
      description: If you know of any existing code that would help us delope this hack for you, please paste it here.
      render: JavaScript
