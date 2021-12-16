export interface BaseItem {
  id: number
	name?: string
	price?: number
	description: string
	image: string
}

export interface Item extends BaseItem {
	id: number
}
