import styles from "./Banner.module.css";

type BannerProps = { content?: string };

function Banner(props: BannerProps) {
  const { content = "" } = props;
  return (
    <blockquote className={styles.banner} lang="en">
      {content}
    </blockquote>
  );
}

export default Banner;
