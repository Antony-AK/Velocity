import PageHero from "../components/common/PageHero";
import Button from "../components/common/Button";

export default function NotFound({ title = "Page not found." }) {
  return (
    <>
      <PageHero title={title} intro="The page you are looking for does not exist or has moved." />
      <div className="wrap pb-32">
        <Button to="/models">View the collection</Button>
      </div>
    </>
  );
}
