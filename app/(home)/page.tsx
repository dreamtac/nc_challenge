import Image from 'next/image';
import Link from 'next/link';
import get_all_data from './actions';

type DataItem = {
    id: string;
    name: string;
    squareImage: string;
    netWorth: number;
    industries: string[];
};

export default async function Home() {
    const data: DataItem[] = await get_all_data();

    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex flex-wrap w-2/3 gap-2 text-center items-center justify-center">
                {data.map((item: DataItem) => {
                    return (
                        <Link key={item.id} href={`/person/${item.id}`}>
                            <div key={item.id} className="h-72 w-52 bg-slate-950 flex flex-col items-center rounded-lg">
                                {item.squareImage === 'https:undefined' ? (
                                    <Image
                                        src="https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800"
                                        alt="image"
                                        width={208}
                                        height={208}
                                        className="rounded-lg"
                                    ></Image>
                                ) : (
                                    <Image
                                        src={item.squareImage}
                                        alt="image"
                                        width={208}
                                        height={208}
                                        className="rounded-lg"
                                    ></Image>
                                )}
                                <p>{item.name}</p>
                                <small className="break-words">
                                    {Math.floor(item.netWorth / 1000)} Billion / {item.industries}
                                </small>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
{
    /* <div>
<Image src={data[0].squareImage} alt="image" width={200} height={200}></Image>
<p>{data[0].name}</p>
<small>
    {Math.floor(data[0].netWorth).toString().slice(0, 3)} Billion / {data[0].industries}
</small>
</div> */
}
