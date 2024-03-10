import { Stack } from '@chakra-ui/react';
import PublicationsDetail from '../parts/publications_detail';

function Publications() {
  return (
    <Stack>
        <PublicationsDetail
            author={["大石啓登", "伊藤寛祥", "豊田正史", "森嶋厚行"]}
            title="	プロジェクト型クラウドソーシングプラットフォームにおけるワーカのスキル推薦"
            conference="第16回データ工学と情報マネジメントに関するフォーラム(DEIM2024)"
            year={2024}
            award="学生プレゼンテーション賞"
            pages="10"
            peer_review="0"
            international="0"
            other={null}
        />
    </Stack>
  );
}

export default Publications;
