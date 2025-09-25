import { Stack } from '@chakra-ui/react';
import PublicationsDetail from '../parts/publications_detail';

function Publications() {
  return (
    <Stack>
        <PublicationsDetail
            author={["Keito Oishi", "Hiroyoshi Ito", "Masashi Toyoda", "Atsuyuki Morishima"]}
            title="	Skill Recommendation based on Real-World Task Market Logs: A Case Study"
            conference="ACM Collective Intelligence Conference(CI'25)"
            year={2025}
            award=""
            pages="11"
            peer_review="1"
            international="1"
            link = 'https://dl.acm.org/doi/abs/10.1145/3715928.3737472'
            other={null}
        />
        <PublicationsDetail
            author={["大石啓登", "伊藤寛祥", "豊田正史", "森嶋厚行"]}
            title="	プロジェクト型クラウドソーシングプラットフォームにおけるワーカのスキル推薦"
            conference="第16回データ工学と情報マネジメントに関するフォーラム(DEIM2024)"
            year={2024}
            award="学生プレゼンテーション賞"
            pages="10"
            peer_review="0"
            international="0"
            link = 'https://confit.atlas.jp/guide/event-img/deim2024/T4-B-6-03/public/pdf'
            other={null}
        />
    </Stack>
  );
}

export default Publications;
