import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

//  인젝션-스코프 => 싱글톤(new 한 번)으로할래?
//                  Request 스코프(매 요청마다 new)로 할래?
//                  Transient 스코프(매 주입마다 new)로 할래?
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용이예요!!!',
      },
      {
        number: 2,
        writer: '훈이',
        title: '훈이입니다~~',
        contents: '훈이이예요!!!',
      },
      {
        number: 3,
        writer: '영희',
        title: '영희입니다~~',
        contents: '영희이예요!!!',
      },
    ];
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

    // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기

    return '게시물 등록에 성공하였습니다.';
  }
}
