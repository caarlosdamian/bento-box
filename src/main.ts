import './style.css';

type CardInfoT =
  | {
      title: string;
      image: string;
      subtitle?: undefined;
    }
  | {
      title: string;
      image: string;
      subtitle: string;
    };

const CardsInfo: CardInfoT[] = [
  {
    title: 'Social Media <stong>10x</stong> Faster with AI',
    image: './assets/images/illustration-five-stars.webp',
    subtitle: 'Over 4,000 5-star reviews',
  },
  {
    title: 'Manage multiple accounts and platforms.',
    image: './assets/images/illustration-multiple-platforms.webp',
  },
  {
    title: 'Maintain a consistent posting schedule.',
    image: './assets/images/illustration-consistent-schedule.webp',
  },
  {
    title: 'Schedule to social media.',
    image: 'public/assets/images/illustration-schedule-posts.webp',
    subtitle:
      'Optimize post timings to publish content at the perfect time for your audience.',
  },
  {
    title: 'Grow followers with non-stop content.',
    image: './assets/images/illustration-grow-followers.webp',
  },
  {
    title: '<strong>>56%</strong> </br>faster audience growth',
    image: 'public/assets/images/illustration-audience-growth.webp',
  },
  {
    title: 'Create and schedule content <strong>quicker</strong>.',
    image: './assets/images/illustration-create-post.webp',
  },
  {
    title: 'Write your content using AI.',
    image: './assets/images/illustration-ai-content.webp',
  },
];

const createCard = (element: CardInfoT) => {
  const article = document.createElement('article');
  article.className = 'card';
  article.classList.add('card');
  if (element.title) {
    const title = document.createElement('h2');
    title.innerHTML = element.title;
    article.appendChild(title);
  }
  if (element.subtitle) {
    const subtitle = document.createElement('p');
    subtitle.innerHTML = element.subtitle;
    article.appendChild(subtitle);
  }
  if (element.image) {
    const image = document.createElement('img');
    image.src = element.image;
    article.appendChild(image);
  }

  return article;
};

const main = () => {
  const app = document.querySelector<HTMLDivElement>('.container');
  CardsInfo.forEach((element) => {
    const cardComponent = createCard(element);
    app?.appendChild(cardComponent);
  });
};

main();
