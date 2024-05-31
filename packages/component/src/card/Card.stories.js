import './Card';
export default {
    title: 'Components/Card',
};
const PrimaryTemplate = ({ image, headline, content, link }) => `
<in-card>
  <img slot="header" src="${image}" />
  <h4 slot="header">${headline}</h4>
  <p slot="content">
  ${content}
  </p>
  <a href="${link}" slot="footer">Read</a>
</in-card>`;
export const ImageCard = PrimaryTemplate.bind({});
ImageCard.args = {
    image: 'https://images.unsplash.com/photo-1612392167062-8f76710986ba?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    headline: 'Food',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \n  nisi ut aliquip ex ea commodo consequat.',
    link: 'https://www.food.com/food',
};
