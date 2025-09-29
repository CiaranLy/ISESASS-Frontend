export interface Post {
    id: number | null;
    poster: {
        id: number | null;
        name: string | null;
        email: string | null;
        phone: string | null;
    }
    price: number | null;
    semester: string | null;
    bed: string | null;
    bathroom: string | null;
    ensuite: boolean | null;
    roommates: number | null;
    notes: string | null;
    location: {
        line_1: string | null;
        line_2: string | null;
        line_3: string | null;
        city: string | null;
        county: string | null;
        eircode: string | null;
    }
}