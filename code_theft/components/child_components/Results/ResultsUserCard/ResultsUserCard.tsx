import { Button, Card, Tag } from "antd";
import React from "react";
const { Meta } = Card;
import styles from "./ResultsUserCard.module.css";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

type ResultsUserCardProps = {
  result?: any;
};

const ResultsUserCard = (props: ResultsUserCardProps) => {
  const { result } = props;
  const redirect = (url: string) => window.open(url, "_blank");

  const addImageFallback = (event: any) => {
    event.currentTarget.src = "https://joeschmoe.io/api/v1/random";
  };

  return (
    <div className="flex flex-col h-[7.5rem] items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl ">
      <img
        className={`${styles.imgContainer}  w-full  object-fill rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg`}
        src={result?.avatar_url}
        onError={addImageFallback}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 pb-0 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
          <span className="mr-4">{result?.login || "Github user"}</span>

          <Tag color="blue" className="mb-2">
            {result?.type || "Admin"}
          </Tag>
        </h5>
        <p className="mb-3 font-normal flex gap-x-4 mt-3">
          <Button
            type="primary"
            icon={<UserOutlined />}
            className={styles.btnAlignment}
            size="small"
            onClick={() => redirect(result?.url)}
          >
            visit user profile
          </Button>
          <Button
            type="primary"
            icon={<HomeOutlined />}
            className={styles.btnAlignment}
            size="small"
            onClick={() => redirect(result?.repos_url)}
          >
            visit user repository
          </Button>
        </p>
      </div>
    </div>
  );
};

export default ResultsUserCard;

{
  /* <ImageWithFallback
        key={`${new Date().toString()}`}
        layout="fill"
        src={`https://joeschmoe.io/api/v1/random`}
        fallbackSrc={`https://joeschmoe.io/api/v1/random`}
      /> */
}

{
  /* <Card
      style={{
        width: 240,
      }}
      cover={<img alt="example" src="" onError={addImageFallback} />}
    >
      <Meta
        title={result?.login || "Unknown user"}
        description={
          <div>
            <Tag>{result?.type || "Unknown"}</Tag>

            <div className="mt-4">
              <Button type="primary" icon={<UserOutlined />} size={"small"}>
                Download
              </Button>

              <Button type="primary" icon={<UserOutlined />} size={"small"}>
                Download
              </Button>
            </div>
          </div>
        }
      />
    </Card> */
}
