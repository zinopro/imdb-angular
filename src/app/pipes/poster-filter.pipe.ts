import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterFilter',
  pure: true
})
export class PosterFilterPipe implements PipeTransform {

  transform(posterData: any[], filter: string ): any {
    return posterData.filter(poster => {
        return (
          poster['Title'].toLowerCase().includes(filter?.toLowerCase()) || 
          poster['Year'].toLowerCase().includes(filter?.toLowerCase()) || filter == ''
        )
    });
  }
}

