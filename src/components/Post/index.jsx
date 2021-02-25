import Action from './Action';
import AddComment from './AddComponent';
import Comments from './Comments';
import Footer from './Footer';
import Header from './Header';
import Image from './Image';

const Post = ({ content }) => {
  return (
    <div className="rounded col-span-4 border bg-white mb-16">
      <Image src={content.imageSrc} caption={content.caption} />
    </div>
  );
};

export default Post;
