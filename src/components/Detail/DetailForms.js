import React from 'react';

export default class DetailForms extends React.Component {
  render() {
    return (
      <>
        {/* <br /> */}
        <div className="detailforms">
          {/* <h3>Comments</h3> */}
          <div className="comments">
            <p className="comments_caption">댓글</p>
            <div className="comments_container">
              <ul>
                {this.props.formProps.comments.map((comment) => (
                  <li key={comment}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="comment-writing-container">
            <p className="comment-writing-container_caption">댓글 입력</p>
            <form onSubmit={this.props.formProps.handleCommentSubmit}>
              <textarea
                rows="4"
                placeholder="여기에 댓글을 입력하세요. 댓글 삭제 기능은 추후 업데이트 예정이오니 댓글을 신중히 작성해주시기 바랍니다."
                onChange={this.props.formProps.handleCommentChange}
                value={this.props.formProps.newComment}
                // cols="150"
              ></textarea>
              <input type="submit" value="댓글 등록" id="submit-button" />
            </form>
          </div>
        </div>
      </>
    );
  }
}
