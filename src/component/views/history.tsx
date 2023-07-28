import { Box, Divider, Heading, Stack } from '@chakra-ui/react';
import HistoryDetail from '../parts/history_detail';

function History() {
    return (
        <Stack>
            <Stack>
                <Year year="2017"/>
                <HistoryDetail
                    detail="国立 豊田工業高等専門学校 入学 "
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
            </Stack>
            <Stack>
                <Year year="2018"/>
                <HistoryDetail
                    detail="第5回 高専生向け NI myRIO組込システム 開発コンテスト 出場"
                    award="敢闘賞"
                    award_color="green"
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='NIT Toba Hackation 出場'
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail="Yahoo HackU 2018 NAGOYA 出場"
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail="第25回 全国高等専門学校将棋大会 個人戦 出場"
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='高専カンファレンスin名古屋 2018 参加'
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='第29回 全国高等専門学校 プログラミングコンテスト 課題部門 出場'
                    award="企業賞"
                    award_color="orange"
                    link=""
                    link_text=""
                />
            </Stack>
            <Stack>
                <Year year="2019"/>
                <HistoryDetail
                    detail="[湖西市×豊田高専] 共同ICT教育プロジェクト「みんなで体験！手のひらサイズのコンピュータ」 開催"
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='第1回 システム創成コンテスト 通信システム部門 出場'
                    award="優秀賞"
                    award_color="blue"
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='Yahoo HackU 2019 NAGOYA 出場'
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail="第26回 全国高等専門学校将棋大会 団体戦 出場"
                    award="第3位"
                    award_color="blue"
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='第26回 全国高等専門学校将棋大会 個人戦 出場'
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='U16 愛知プログラミング コンテスト 運営'
                    award=""
                    award_color=""
                    link=""
                    link_text=""
                />
                <HistoryDetail
                    detail='THAILAND-JAPAN STUDENT ICT FAIR 2019 参加'
                    award=""
                    award_color=""
                    link="http://tjsif2019.pccm.ac.th/welcome/info/2"
                    link_text="infomation"
                />
                
            </Stack>
        </Stack>
    )
}

export default History;

interface YearProps {
    year: string
}

function Year(props: YearProps){
    const year = props.year
    return (
        <Box>
            <Heading as="h4" size="lg" mt="5px" ml="5px">{year}</Heading>
            <Divider />
        </Box>
    )
}
