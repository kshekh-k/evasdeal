
import type { NextApiRequest, NextApiResponse } from 'next';
import categories from '../../utils/categories';

export default (req: NextApiRequest, res: NextApiResponse) => {

    console.log(req);
    // fake loading time
    setTimeout(() => {
        res.status(200).json(categories);
    }, 800);
}

