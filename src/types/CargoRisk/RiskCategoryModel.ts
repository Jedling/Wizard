interface IRiskCategoryModel {
  Name: string;
  Id: number;
  Description: string;
  Selected: boolean;
  Image: string;
  InfoImg: string;
  MoreInfo: boolean;
}

export class RiskCategoryModel implements IRiskCategoryModel {
  public Name: string;
  public Id: number;
  public Description: string;
  public Selected: boolean;
  public Image: string;
  public InfoImg: string;
  public MoreInfo: boolean;
    /**
     *
     */
  constructor(id: number = 0, name: string = '', description: string = '',
              selected: boolean = false, image: string = '', infoImg: string = '', moreInfo: boolean = false) {
    this.Name = name;
    this.Id = id;
    this.Description = description;
    this.Selected = selected;
    this.Image = image;
    this.InfoImg = infoImg;
    this.MoreInfo = moreInfo;
  }
}
