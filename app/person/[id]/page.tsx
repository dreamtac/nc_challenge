import Image from 'next/image';
import get_one_data from './actions.';

type DetailPageProps = {
    params: {
        id: string;
    };
};

type FinancialAssetsType = {
    id: string;
    ticker: string;
    numberOfShares: number;
    exerciseOptionPrice: number;
};

export default async function detail_page({ params }: DetailPageProps) {
    const data = await get_one_data(params.id);
    const formatShare = (shares: number) => {
        return shares.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        <div className="flex flex-col gap-16 items-center py-16">
            <div className=" flex flex-col gap-2 bg-slate-950 w-4/5 py-14 px-8 rounded-md">
                <Image src={data.squareImage} alt="image" width={400} height={400}></Image>
                <h1 className="font-extrabold text-3xl py-3">{data.name}</h1>
                <p className="font-bold text-lg">Networth: {Math.floor(data.netWorth / 1000)} Billion</p>
                <p className="font-bold text-lg">Industry: {data.industries}</p>
                <p>{data.bio}</p>
            </div>

            {data.financialAssets ? (
                <div className="flex flex-col gap-2 bg-slate-950 w-4/5 py-14 px-8 rounded-md">
                    <h1 className="font-extrabold text-3xl py-3">Financial Assets</h1>
                    <div className="flex flex-wrap items-center justify-center gap-4 font-bold">
                        {data.financialAssets.map((item: FinancialAssetsType, index: number) => {
                            return (
                                <div
                                    className="flex flex-col w-60 h-32 gap-2 border border-slate-500 py-4 px-2 rounded-xl"
                                    key={index}
                                >
                                    <p>Ticker: {item.ticker}</p>
                                    <p>Shares: {formatShare(item.numberOfShares)}</p>
                                    {item.exerciseOptionPrice ? (
                                        <p>Excercise Price: ${item.exerciseOptionPrice}</p>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
