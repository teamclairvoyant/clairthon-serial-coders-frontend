import { Typography } from "antd";

const { Text } = Typography;

type TagsGeneratorProps = {
  input: [String];
};

function TagsGenerator(props: TagsGeneratorProps) {
  const { input = [] } = props;

  const cleanedInput = Array.isArray(input) ? input : [];

  return (
    <>
      {cleanedInput.map((value, id) => (
        <Text key={`${new Date().getTime()}-${id}`} code>
          {value}
        </Text>
      ))}
    </>
  );
}

export default TagsGenerator;
