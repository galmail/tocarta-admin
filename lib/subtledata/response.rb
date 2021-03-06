module Subtledata
  module Response
    def self.create( response, format_out )
      data = response.split('|')

      # If startup method just retun session token
      if data[0] == '0000'
        Subtledata.logger.info "* startup response"
        data[1]
      elsif format_out == 'boolean'
        Subtledata.logger.info "* boolean response"
        return true  if data[1] == '1'
        return false if data[1] == '0'
      elsif format_out == 'parse'
        Subtledata.logger.info "* parsed response"
        parse_output(data)
        # data
      else
        Subtledata.logger.info "* general response"
        data
      end
    end

    private

    # FIXME: This needs to improve
    def self.parse_output(data)
      if data[1].match(/~/)
        data[1] = data[1].split('~')
        data[1] = data[1].map { |v| v.split('^') if v.match(/\^/) }
        data[1].each do |i|
          i.map! { |v| v.match(/`/) ? v.split('`') : v }
        end
      elsif data[1].match(/\^/)
        data[1] = data[1].split('^')
        data[1].map! { |v| v.match(/`/) ? v.split('`') : v }
      end

      data
    end

    # attr_reader :pagination
    # attr_reader :meta
  end
end
