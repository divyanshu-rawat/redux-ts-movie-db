export default interface ResponseType {
    loading: boolean,
    movie?: MovieType,
}


export interface MovieType {
    page: number,
    results: any[],
    total_pages: number,
    total_results: number,
}