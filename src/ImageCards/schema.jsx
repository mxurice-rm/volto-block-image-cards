const ImageCard = {
  title: 'Image Card',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'text', 'attachedimage', 'link', 'copyright'],
    },
  ],

  properties: {
    title: {
      type: 'string',
      title: 'Title',
    },
    text: {
      widget: 'slate_richtext',
      title: 'Text',
    },
    link: {
      widget: 'object_by_path',
      title: 'Link',
    },
    attachedimage: {
      widget: 'attachedimage',
      title: 'Image',
    },
    copyright: {
      widget: 'slate_richtext',
      title: 'Copyright',
    },
  },

  required: ['attachedimage'],
};

const ImageCards = {
  title: 'Image Cards',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'text', 'display', 'align', 'cards'],
    },
  ],

  properties: {
    title: {
      type: 'string',
      title: 'Title',
    },
    text: {
      widget: 'slate_richtext',
      title: 'Text',
    },
    display: {
      title: 'Display',
      choices: [
        ['round_tiled', 'Round Tiled'],
        ['carousel', 'Carousel'],
      ],
    },
    cards: {
      widget: 'object_list',
      title: 'Images',
      // this is an invention, should confront with dexterity serializer
      description: 'Add a list of Images as Carousel Items',
      schema: ImageCard,
    },
    align: {
      title: 'Alignment',
      widget: 'align',
      type: 'string',
    },
  },

  required: ['display', 'cards'],
};

export default ImageCards;
