const mockDestinations = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    title: 'Bali, Indonesia',
    desc: 'Asia | Denpasar',
    price: '$1200',
    duration: 7,
    rating: 4.8
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    title: 'Santorini, Greece',
    desc: 'Europe | Fira',
    price: '$1800',
    duration: 5,
    rating: 4.9
  }
  // Add more destinations as needed
];

exports.getAllDestinations = (req, res) => {
  res.json(mockDestinations);
};

exports.getDestinationById = (req, res) => {
  const id = parseInt(req.params.id);
  const destination = mockDestinations.find(dest => dest.id === id);
  if (!destination) {
    return res.status(404).json({ message: 'Destination not found' });
  }
  res.json(destination);
};
