type Props = {
  params: {
    // 생성한 키워드 이름
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  return <div>{params.slug}</div>;
}
